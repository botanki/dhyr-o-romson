import { Component } from '@angular/core';

@Component({
	selector: 'footer',
	templateUrl: './footer.html',
	styleUrls: ['./footer.css']
})

export class FooterComponent  {
    company = 'Dhyr & Rumson';
    image = 'logo_footer.png';
    contact = { phone: '0768908767', address: 'Almbackgatan 16 Malmö', email: 'info@dhyrrumson.se' }

    links = [
    { name: 'facebook', url: 'http://www.facebook.com/dhyrandrumson', iconname: 'facebook-square'},
    { name: 'twitter', url: 'http://www.twitter.com/dhyrandrumson', iconname: 'twitter-square'},
    { name: 'linkedin', url: 'http://www.linkedin.com/dhyrandrumson', iconname: 'linkedin-square'},
    { name: 'instagram', url: 'http://www.instagram.com/dhyrandrumson', iconname: 'instagram'}]
}
