import axios from 'axios';

// indicate the bvn database url
const BVN_API = 'http://larapi.test/api/bvns/';

// get the bvn from the form input
let bvn_number = '';

// const form = document.querySelector('form');
// const formEvent = form.addEventListener('submit', async e => {
// 	e.preventDefault();

// 	const bvn_input = document.querySelector('#bvn').value;

// 	const bvn_data = {
// 		bvn_input
// 	};

// 	const addedBvn = await addBvn(bvn_data);
// 	add
// });

// the list of options that will be gotten from the bvn api
const all_dev_options = ['first_name', 'middle_name', 'last_name'];

// compare provided options with the above
export let dev_options = [];

function result(obj, ...params) {
  let newObj = {}
  Object.keys(obj).forEach(key => {
    if (params.includes(key)) { newObj[key] = obj[key] }
  })
  return newObj
}

// return the values of the options in the bvn api as result
function getUserDetailsFromBvnApi() {
	try {
		const response = axios.get(BVN_API + bvn_number);
		const user_data = response.data;
		// if user data is not empty
		if (user_data) {
			// check if some or more of dev_options is in all_dev_options
			if (all_dev_options.includes(dev_options)) {
				// approve the request
				createUser(user_data);
			} else {
				// deny the request
				return {
					"<pre>your options contains one or more invalid input.<br>make sure it contains one or more of the following<br><code>['first_name', 'middle_name', 'last_name']</code></pre>";
				}
			}
		} else {
			console.log('User with bvn number ' + bvn_number + ' does not exist');
		}
	}
	catch (error) {
		console.log(error);
	}
}

export function createUser(data) {
	try {
		// code to post data into your database
		const response = await axios.post('<url to handle form>', result(data, dev_options));
		// use the deatails returned by resonse to handle your users
		console.log(response);
	}
	catch (error) {
		console.log(error);
	}

  axios.post('<url to handle form>', this.result(data, <'comma separated string parameters needed from user'>))
  .then(response => {
  	if (response.data.success) {
  		console.log(response.data.response);
  		console.log(response.data.success);
  	}
  }).catch(error => console.log(error));
}

module.exports = $bvn;