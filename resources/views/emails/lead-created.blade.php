@component('mail::message')
# New contact created

@component('mail::table')
| Field              | Value               |
| :----------------- | :-------------------| 
| First Name         | {{$first_name}}     |
| Last Name          | {{$last_name}}      | 
| Email              | {{$email}}          |
| Phone Number       | {{$phone}}          |   
| Country            | {{$country}}        |
| IP Address         | {{$ip}}             |
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
