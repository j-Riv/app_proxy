import React, { useState } from 'react';
import countries from '../data/countries';

interface Props {
  customerId: string;
  subscription: any;
  setUpdateAddress: (value: React.SetStateAction<boolean>) => void;
}

const ShippingAddressForm = (props: Props) => {
  const { subscription } = props;
  const Countries: { [key: string]: string[][] } = countries;
  const [viewProvince, setViewProvince] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [provinces, setProvinces] = useState<string[][]>();
  // data
  const address = subscription.deliveryMethod.address;
  const [company, setCompany] = useState<string>(address.company);
  const [address1, setAddress1] = useState<string>(address.address1);
  const [address2, setAddress2] = useState<string>(address.address2);
  const [city, setCity] = useState<string>(address.city);
  const [province, setProvince] = useState<string>(address.province);
  const [country, setCountry] = useState<string>(address.country);
  const [zip, setZip] = useState<string>(address.zip);
  const [name, setName] = useState<string>(address.name);
  const [firstName, setFirstName] = useState<string>(address.firstName);
  const [lastName, setLastName] = useState<string>(address.lastName);
  const [phone, setPhone] = useState<string>(address.phone);

  const handleCountryChange = (event: { target: { value: any } }) => {
    const c = event.target.value;
    console.log('SETTING COUNTRY', c);
    setCountry(c);
    if (Countries[c]) {
      setProvinces(Countries[c]);
      setViewProvince(true);
    } else {
      setViewProvince(false);
    }
  };

  const handleProvinceChange = (event: { target: { value: any } }) => {
    const p = event.target.value;
    console.log('SETTING PROVINCE', p);
    setProvince(p);
  };

  return (
    <div className="form-vertical">
      <form method="post" acceptCharset="UTF-8">
        <h2>Edit address</h2>
        <div className="grid">
          <div className="grid__item medium-up--one-half">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              value={firstName}
            />
          </div>

          <div className="grid__item medium-up--one-half">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="last_name"
              value={lastName}
            />
          </div>
        </div>

        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" value={company} />

        <label htmlFor="address1">Address</label>
        <input type="text" id="address1" name="address1" value={address1} />

        <label htmlFor="address2">Apartment, suite, etc.</label>
        <input type="text" id="address2" name="address2" value={address2} />

        <div className="grid">
          <div className="grid__item medium-up--one-half">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={city} />
          </div>
          <div className="grid__item medium-up--one-half">
            <label htmlFor="Country">Country/Region</label>
            <select
              id="country"
              className="address-country-option"
              name="country"
              value={country}
              onChange={handleCountryChange}
            >
              <option value="---">---</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Aland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua And Barbuda">Antigua &amp; Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Ascension Island">Ascension Island</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia And Herzegovina">
                Bosnia &amp; Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Virgin Islands, British">
                British Virgin Islands
              </option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Republic of Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Caribbean Netherlands">
                Caribbean Netherlands
              </option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo - Brazzaville</option>
              <option value="Congo, The Democratic Republic Of The">
                Congo - Kinshasa
              </option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Curaçao">Curaçao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czechia</option>
              <option value="Côte d'Ivoire">Côte d’Ivoire</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt" data-provinces="[">
                Egypt
              </option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">
                Falkland Islands
              </option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong SAR</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle Of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao SAR</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Moldova, Republic of">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar (Burma)</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palestinian Territory, Occupied">
                Palestinian Territories
              </option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn Islands</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Réunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome And Principe">
                São Tomé &amp; Príncipe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Sint Maarten">Sint Maarten</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia And The South Sandwich Islands">
                South Georgia &amp; South Sandwich Islands
              </option>
              <option value="South Korea">South Korea</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Saint Barthélemy">St. Barthélemy</option>
              <option value="Saint Helena">St. Helena</option>
              <option value="Saint Kitts And Nevis">
                St. Kitts &amp; Nevis
              </option>
              <option value="Saint Lucia">St. Lucia</option>
              <option value="Saint Martin">St. Martin</option>
              <option value="Saint Pierre And Miquelon">
                St. Pierre &amp; Miquelon
              </option>
              <option value="St. Vincent">St. Vincent &amp; Grenadines</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard And Jan Mayen">
                Svalbard &amp; Jan Mayen
              </option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic Of">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad &amp; Tobago</option>
              <option value="Tristan da Cunha">Tristan da Cunha</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">
                Turks &amp; Caicos Islands
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="United States Minor Outlying Islands">
                U.S. Outlying Islands
              </option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Holy See (Vatican City State)">
                Vatican City
              </option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Wallis And Futuna">Wallis &amp; Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
        </div>

        {viewProvince && (
          <div id="provinceContainer">
            <label htmlFor="province">Province</label>
            <select
              id="province"
              name="province"
              value={province}
              onChange={handleProvinceChange}
            >
              {provinces &&
                provinces.map((province: string[]) => {
                  return (
                    <option key={province[0]} value={province[0]}>
                      {province[1]}
                    </option>
                  );
                })}
            </select>
          </div>
        )}

        <div className="grid">
          <div className="grid__item">
            <label htmlFor="zip">Postal/Zip Code</label>
            <input type="text" id="zip" name="zip]" value={zip} />
          </div>

          <div className="grid__item">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={phone} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressForm;
