<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class LeadCreated extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $contact;
    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.lead-created', [
            'first_name' => $this->contact->first_name,
            'last_name' => $this->contact->last_name,
            'email' => $this->contact->email,
            'phone' => $this->contact->phone,
            'country' => $this->contact->country,
            'ip' => $this->contact->ip,
        ]);
    }
}
