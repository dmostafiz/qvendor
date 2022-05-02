<?php

use App\Mail\LeadCreated;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

Route::get('/landing/{uname?}', function (Request $request) {

    if(!$request->uname){
        return redirect()->to('/landing/master');
    }
    return view('landing', [
        'sponsor'=>$request->uname
    ]);
});



Route::post('/save_contact', function (Request $request){
    // dd($request->all());

    $validated = $request->validate([
        'first_name' => 'required',
        'last_name' => 'required',
        'email' => 'required',
    ]);

    if($request->sponsor){
        $sponsor = User::where('username', $request->sponsor)->first();

        if($sponsor){

            $contact = new Contact();
            $contact->user_id = $sponsor->id;
            $contact->first_name = $request->first_name;
            $contact->last_name = $request->last_name;
            $contact->email = $request->email;
            $contact->phone = $request->phone;
            $contact->country = $request->country;
            $contact->ip = $request->ip();

            $contact->save();


            foreach ([$sponsor->email, $contact->email] as $recipient) {
                Mail::to($recipient)->send(new LeadCreated($contact));
            }

            session()->flash('success', 'Thank you for submitting your information.');

            return redirect()->to('/'.$request->sponsor);
        }
    }


})->name('save_contact');

Route::get('/ordernow/{uname?}', function (Request $request) {

    if(!$request->uname){
        return redirect()->to('/ordernow/master');
    }

    return view('ordernow',[
        'sponsor' => $request->uname
    ]);
});

Route::get('/start/{uname?}', function (Request $request) {
    if(!$request->uname){
        return redirect()->to('/start/master');
    }
    return Inertia::render('Home/Landing', [
        'sponsor' => $request->uname
    ]);
});

Route::get('/get_user_data/{uid?}', function (Request $request) {
    if(!$request->uid){
        return;
    }

    $user = User::where('id', $request->uid)->with('parent')->with('contacts')->first();
    return $user;
});

Route::post('/update_profile_image', function(Request $request) {

    
    $request->validate([
        // 'title' => 'required', 
        'image' => 'required|mimes:jpeg,png,jpg|max:2048',
        // 'description' => 'required', 
    ]);

    
    if(!Storage::disk('public')->exists('profile'))
    {
        Storage::disk('public')->makeDirectory('profile');
    } 
    
    $user = User::where('id', $request->user()->id)->first();

    if($user){

        if(Storage::disk('public')->exists('profile/'.$user->avatar))
        {
            Storage::disk('public')->delete('profile/'.$user->avatar);
        }

        $file = $request->file('image');

        $file_ext = $file->getClientOriginalExtension();

        $image = 'image_'.time().'.'.$file_ext;
        
        $save = 'storage/profile/'. $image;
        
        Image::make($file)->save($save);

        $user->avatar = $image;
        
        $user->save();
        
        session()->flash('success', 'Profile image updated successfully!');

        return redirect()->back();
    }

})->name('profile_image');


Route::post('/update_account', function(Request $request){

    $user = User::findOrFail($request->user()->id);

    if($request->update == 'profile'){ 

        $request->validate([
            'name' => 'required',
            'phone_number' => 'required',
            'address' => 'required',
            'city' => 'required',
            'country' => 'required',
            'zip' => 'required',
        ]);

        $user->name = $request->name;
        $user->phone_number = $request->phone_number;
        $user->address = $request->address;
        $user->city = $request->city;
        $user->country = $request->country;
        $user->zip = $request->zip;

    }elseif($request->update == 'email'){
        $request->validate([
            'email' => 'required|email|unique:users,email,'.$user->id,
        ]);
        $user->email = $request->email;

    }elseif($request->update == 'password'){
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|confirmed',
        ]);
        
        $user->password = Hash::make($request->password);
    }

    $user->save();

    session()->flash('success', 'Account has been updated!');

    return redirect()->back();

})->name('update.account');


require __DIR__.'/AdminRoutes.php';
require __DIR__.'/UserRoutes.php';
require __DIR__.'/auth.php';

Route::get('/{uname?}', function (Request $request) {
    if(!$request->uname){
        return redirect()->to('/master');
    }
    return Inertia::render('Home/Landing', [
        'sponsor' => $request->uname
    ]);
});
