<template>
<form id="formNewClient" class="form-inline" method="post" action="http://localhost:5000">
    <input id="csrf_token" type="hidden" name="csrf_token" value="" v-model="csrftoken"/>
    <div class="explanation">Organization details</div>
    <div class="form-group">
        <label class="sr-only" for="Name">Name</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="The organization name if applicable" v-model="name">
    </div>
     <div class="form-group">
        <label class="sr-only" for="vat">VAT</label>
        <input type="text" class="form-control" id="vat" name="vat" placeholder="VAT if applicable" v-model="vat">
    </div>

    <div class="explanation">Contact details</div>
    <div class="form-group">
        <label class="sr-only" for="firstName">First Name</label>
        <input type="text" class="form-control" id="first_name" name="first_name" placeholder="First Name" v-model="first_name">
    </div>
    <div class="form-group">
        <label class="sr-only" for="lastName">Last Name</label>
        <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last Name" v-model="last_name">
    </div>
     <div class="form-group">
        <label class="sr-only" for="address1">Address 1</label>
        <input type="text" class="form-control" id="address1" name="address1" placeholder="Address line 1" v-model="address1">
    </div>
     <div class="form-group">
        <label class="sr-only" for="address2">Address 2</label>
        <input type="text" class="form-control" id="address2" name="address2" placeholder="Address line 2" v-model="address2">
        <span class="help-block"></span>
    </div>
     <div class="form-group">
        <label class="sr-only" for="city">City</label>
        <input type="text" class="form-control" id="city" name="city" placeholder="City" v-model="city">
    </div>
     <div class="form-group">
        <label class="sr-only" for="state">State</label>
        <input type="text" class="form-control" id="state" name="state" placeholder="State" v-model="state">
    </div>

     <div class="form-group">
        <label class="sr-only" for="postal_code">Postal Code</label>
        <input type="text" class="form-control" id="postal_code" name="postal_code" placeholder="Postal Code" v-model="postal_code">
    </div>

    <div class="form-group">
        <label class="sr-only" for="country">Country</label>
        <select class="form-control" name="country" id="country" v-model="country">
        {% raw %}

        <option v-for="option in countries" v-bind:value="option.id">{{option.name}}</option>
        {% endraw %}
        </select>
    </div>
    <div class="form-group">
        <label class="sr-only" for="email">Email address</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email" v-model="email">
    </div>
</form>
<h3>{{ stepValue }}</h3>
</template>

<script>
import { getCount } from './vuex/getters';

export default {
    data: function(){
        return {csrftoken: '',
                vat:'',
                name: '',
                first_name: '',
                last_name: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
                countries: '',
                email: ''
                }
    },
    created: function(){
        this.getCountries();
    },
    methods: {
        getCountries: function(){
            var self = this;
            var domain = 'http://localhost:5000';
            $.ajax({
                url: domain + "/countries",
                crossDomain: true,
                xhrFields: { withCredentials: true }
            }).done(function(countries) {
                console.log("I have the countries!");
                self.countries = countries;
            })
        }
    },
    vuex: {
        getters: {
            stepValue: getCount
        }
    }
}
</script>
