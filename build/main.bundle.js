/*
This is empty on purpose! Your code to build the resume will go here.
model - bio, edu, work, project objects 
controller - will get the data from model and pass to the view 
view - the data from the controller put on to the screen

 */

$(function () {
	var HTMLheaderName = '<h1 id="name">%data%</h1>';
	var HTMLheaderRole = '<span class="role">%data%</span><hr>';

	var HTMLcontactGeneric = '<li class="flex-item"><span class="blue-text">%contact%</span><span class="white-text">%data%</span></li>';
	var HTMLmobile = '<li class="flex-item"><span class="blue-text">mobile</span><span class="white-text">%data%</span></li>';
	var HTMLemail = '<li class="flex-item"><span class="blue-text">email</span><span class="white-text">%data%</span></li>';
	var HTMLtwitter = '<li class="flex-item"><span class="blue-text">twitter</span><span class="white-text">%data%</span></li>';
	var HTMLgithub = '<li class="flex-item"><span class="blue-text">github</span><span class="white-text">%data%</span></li>';
	var HTMLblog = '<li class="flex-item"><span class="blue-text">blog</span><span class="white-text">%data%</span></li>';
	var HTMLlocation = '<li class="flex-item"><span class="blue-text">location</span><span class="white-text">%data%</span></li>';

	var HTMLbioPic = '<img src="%data%" class="biopic">';
	var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

	var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
	var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

	var HTMLworkStart = '<div class="work-entry"></div>';
	var HTMLworkEmployer = '<a href="#">%data%';
	var HTMLworkTitle = ' - %data%</a>';
	var HTMLworkDates = '<div class="date-text">%data%</div>';
	var HTMLworkLocation = '<div class="location-text">%data%</div>';
	var HTMLworkDescription = '<p><br>%data%</p>';

	var HTMLprojectStart = '<div class="project-entry"></div>';
	var HTMLprojectTitle = '<a href="#">Title: %data%</a>';
	var HTMLprojectDates = '<div class="date-text">Year: %data%</div>';
	var HTMLprojectDescription = '<p><br>Description: %data%</p>';
	var HTMLprojectImage = '<img src="%data%">';

	var HTMLschoolStart = '<div class="education-entry"></div>';
	var HTMLschoolName = '<a href="#">%data%';
	var HTMLschoolDegree = ' -- %data%</a>';
	var HTMLschoolDates = '<div class="date-text">%data%</div>';
	var HTMLschoolLocation = '<div class="location-text">%data%</div>';
	var HTMLschoolMajor = '<em><br>Major: %data%</em>';

	var HTMLonlineClasses = '<h3>Online Classes</h3>';
	var HTMLonlineTitle = '<a href="#">Title: %data%';
	var HTMLonlineSchool = ' - %data%</a>';
	var HTMLonlineDates = '<div class="date-text">Date attended: %data%</div>';
	var HTMLonlineURL = '<br><a href="#" class="couURL">Course URL: %data%</a>';

	var internationalizeButton = '<button>Internationalize</button>';
	var googleMap = '<div id="map"></div>';

	var model = {

		bio: {
			name: "Christopher Capozzi",
			role: "Instructor",
			contacts: { mobile: "010-7299-0628",
				email: "capozzic1@gmail.com",
				github: "https://github.com/capozzic1",
				location: "Daegu, South Korea"
			},
			welcomeMessage: "Welcome to my e-resume",
			skills: ["HTML5", "CSS", "JavaScript", "jQuery", "ReactJS", "git", "Chrome Developer Tools", "Fire bug", "MVC", "Sass"],
			biopic: "https://s21.postimg.org/am1rzzks7/biopic.jpg"

		},

		education: {
			schools: [{
				name: "University of Nevada, Las Vegas",
				location: "Las Vegas, Nevada",
				degree: "Bachelor of Science in Business Administration",
				major: "Management Information Systems",
				dates: "06/2008-08/2013"
			}],
			onlineCourses: [{
				title: "Javascript Design Patterns",
				school: "Udacity",
				dates: "03/2017-04/2017",
				url: "https://www.udacity.com/course/javascript-design-patterns--ud989"
			}, {
				title: "Front end webdevelopment program",
				school: "Freecodecamp.com",
				dates: "08/2016-01/2017",
				url: "https://www.freecodecamp.com/capozzic1/front-end-certification"
			}, {
				title: "Javascript",
				school: "Codeacademy",
				dates: "01/2016-12/2017",
				url: "https://www.codecademy.com/learn/javascript"
			}, {
				title: "Learn ReactJS",
				school: "Codeacademy",
				dates: "2017",
				url: "https://www.codecademy.com/learn/react-101"
			}, {
				title: "jQuery",
				school: "Codeacademy",
				dates: "2016",
				url: "https://www.codecademy.com/learn/jquery"
			}, {
				title: "PHP",
				school: "Codeacademy",
				dates: "2016",
				url: "https://www.codecademy.com/learn/php"
			}]

		},

		work: {
			jobs: [{
				employer: "Daegu Gyeongbuk English Village",
				title: "Instructor",
				dates: "03/2016-present",
				description: "At DGEV, my duty is to teach English to students of all age levels.",
				location: "Daegu, South Korea"

			}, {
				employer: "Cox Communications",
				title: "National Support Center Technical Specialist",
				dates: "03/2016-present",
				description: "During my time at Cox, I assisted Cox Business customers with troubleshooting internet, phone, and video related problems. I translated technical problems to nontechnical people.",
				location: "Las Vegas, Nevada"

			}]
		},
		projects: [{
			title: "A responsive mock website",
			dates: "2017",
			description: "A partial theme made with HTML, CSS, Javascript, and Bootstrap",
			images: ["https://image.ibb.co/ePPUrF/mock.png"]
		}, {
			title: "A weather app",
			dates: "2016",
			description: "An app that uses AJAX and uses the open weather API to deliver weather information",
			images: ["https://image.ibb.co/fBTYJv/weather.png"]
		}, {
			title: "A recipe box",
			dates: "2017",
			description: "An app where you can create, edit, and delete recipes",
			images: ["https://image.ibb.co/iAi0yv/recipebox.png"]
		}]

	};

	var controller = {
		init() {
			this.formatBio();
			this.formatEdu();
			this.formatWork();
			this.formatProj();
			view.init();
		},
		formatBio() {

			var bioArr = [];
			var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
			var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

			var name = HTMLheaderName.replace('%data%', model.bio.name);
			var role = HTMLheaderRole.replace('%data%', model.bio.role);
			var email = HTMLemail.replace("%data%", model.bio.contacts.email);
			var mobile = HTMLmobile.replace("%data%", model.bio.contacts.mobile);
			var git = HTMLgithub.replace("%data%", model.bio.contacts.github);
			var blog = HTMLblog.replace("%data%", "http://dreamcap.site88.net/blog/");
			var location = HTMLlocation.replace("%data%", model.bio.contacts.location);
			var pic = HTMLbioPic.replace("%data%", model.bio.biopic);
			var welcome = HTMLwelcomeMsg.replace('%data%', model.bio.welcomeMessage);

			var skills = "";
			$.each(model.bio.skills, (i, value) => {
				skills += HTMLskills.replace("%data%", value);
			});

			bioArr.push(name, role, email, mobile, git, blog, location, pic, welcome);

			return bioArr;
		},

		formatEdu() {

			var HTMLschoolStart = '<div class="education-entry"></div>';
			var HTMLonlineClasses = '<h3>Online Classes</h3>';
			var schoolArr = [];

			var schStart = HTMLschoolName.replace("%data%", model.education.schools[0].name);
			var degree = HTMLschoolDegree.replace("%data%", model.education.schools[0].degree);
			var dates = HTMLschoolDates.replace("%data%", model.education.schools[0].dates);
			var location = HTMLschoolLocation.replace("%data%", model.education.schools[0].location);
			var major = HTMLschoolMajor.replace("%data%", model.education.schools[0].major);

			var onlineClasses = "";

			$.each(model.education.onlineCourses, (i, value) => {
				onlineClasses += "<li>" + HTMLonlineTitle.replace("%data%", value.title) + HTMLonlineSchool.replace("%data%", value.school) + HTMLonlineDates.replace("%data%", value.dates) + HTMLonlineURL.replace("%data%", value.url) + "</li>";
			});

			schoolArr.push([HTMLschoolStart, schStart, degree, dates, location, major], [HTMLonlineClasses, onlineClasses]);

			return schoolArr;
			////console.log(onlineClasses);
			//$('body').append(onlineClasses);
		},

		formatWork() {
			//maybe pass workstart to the view , append ul to it, then add jobs
			var HTMLworkStart = '<div class="work-entry"></div>';

			var jobInfo = [];
			var jobs = "";

			$.each(model.work.jobs, (i, job) => {

				jobs += "<li>" + HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title) + HTMLworkDates.replace("%data%", job.dates) + HTMLworkLocation.replace("%data%", "Las Vegas, Nevada") + HTMLworkDescription.replace("%data%", job.description) + "</li>";
			});
			jobInfo.push(HTMLworkStart, jobs);
			return jobInfo;
			//$('body').append(jobs);
		},

		formatProj() {
			//give start to view and add ul, then add projs li 
			var HTMLprojectStart = '<div class="project-entry"></div>';

			let projArr = [];
			projs = "";

			$.each(model.projects, (i, proj) => {
				projs += "<li>" + HTMLprojectTitle.replace("%data%", proj.title) + HTMLprojectDates.replace("%data%", proj.dates) + HTMLprojectDescription.replace("%data%", proj.description) + HTMLprojectImage.replace("%data%", proj.images) + "</li>";
			});
			projArr.push(HTMLprojectStart, projs);

			return projArr;
			//$('body').append(projs);
		}

	};
	var view = {

		init() {
			this.showBio();
			this.showEdu();
			this.showProj();
			this.showMap();
			this.showWork();
			this.preventClick();
		},
		showWork() {
			var jobInfo = controller.formatWork();
			$('#workExperience').append(jobInfo[0]);
			$('.work-entry').append('<ul></ul>');
			$('.work-entry ul').append(jobInfo[1]);
		},

		showBio() {
			var bioInfo = controller.formatBio();
			var lis = "";
			////console.log(bioInfo);
			$('#header').append(bioInfo[0], bioInfo[1], bioInfo[7], bioInfo[8]);

			for (let i = 2; i < 7; i++) {
				$('#topContacts').append(bioInfo[i]);
			}

			//$('#topContacts').append();
		},
		showEdu() {
			var eduInfo = controller.formatEdu();
			////console.log(eduInfo);
			$('#education').append(eduInfo[0][0]);
			for (let i = 1; i < eduInfo[0].length; i++) {
				$('.education-entry').append(eduInfo[0][i]);
			};
			$('.education-entry').append('<ul></ul>');
			$.each(eduInfo[1], (i, item) => $('.education-entry ul').append(eduInfo[1][i]));
		},
		showProj() {
			var projInfo = controller.formatProj();
			//console.log(projInfo);
			$('#projects').append(projInfo[0]);
			$('.project-entry').append("<ul></ul>");
			$('.project-entry ul').append(projInfo[1]);
		},
		showMap() {
			var googleMap = '<div id="map"></div>';
			$('#mapDiv').append(googleMap);
		},
		preventClick() {
			$('a').click(event => event.preventDefault());
		}

	};

	controller.init();

	function initializeMap() {

		var locations;

		var mapOptions = {
			disableDefaultUI: true
		};

		/*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
		map = new google.maps.Map(document.querySelector('#map'), mapOptions);

		/*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
		function locationFinder() {

			// initializes an empty array
			var locations = [];

			// adds the single location property from bio to the locations array
			locations.push(model.bio.contacts.location);

			// iterates through school locations and appends each location to
			// the locations array. Note that forEach is used for array iteration
			// as described in the Udacity FEND Style Guide:
			// https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
			model.education.schools.forEach(function (school) {
				locations.push(school.location);
			});
			////console.log(locations);

			// iterates through work locations and appends each location to
			// the locations array. Note that forEach is used for array iteration
			// as described in the Udacity FEND Style Guide:
			// https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
			model.work.jobs.forEach(function (job) {
				locations.push(job.location);
			});
			//console.log(locations);
			return locations;
		}

		/*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
		function createMapMarker(placeData) {

			// The next lines save location data from the search result object to local variables
			var lat = placeData.geometry.location.lat(); // latitude from the place service
			var lon = placeData.geometry.location.lng(); // longitude from the place service
			var name = placeData.formatted_address; // name of the place from the place service
			var bounds = window.mapBounds; // current boundaries of the map window

			// marker is an object with additional data about the pin for a single location
			var marker = new google.maps.Marker({
				map: map,
				position: placeData.geometry.location,
				title: name
			});

			// infoWindows are the little helper windows that open when you click
			// or hover over a pin on a map. They usually contain more information
			// about a location.
			var infoWindow = new google.maps.InfoWindow({
				content: name
			});

			// hmmmm, I wonder what this is about...
			google.maps.event.addListener(marker, 'click', function () {
				// your code goes here!
				infoWindow.open(map, marker);
			});

			// this is where the pin actually gets added to the map.
			// bounds.extend() takes in a map location object
			bounds.extend(new google.maps.LatLng(lat, lon));
			// fit the map to the new marker
			map.fitBounds(bounds);
			// center the map
			map.setCenter(bounds.getCenter());
		}

		/*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
		function callback(results, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				createMapMarker(results[0]);
			}
		}

		/*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
		function pinPoster(locations) {

			// creates a Google place search service object. PlacesService does the work of
			// actually searching for location data.
			var service = new google.maps.places.PlacesService(map);

			// Iterates through the array of locations, creates a search object for each location
			locations.forEach(function (place) {
				// the search request object
				var request = {
					query: place
				};

				// Actually searches the Google Maps API for location data and runs the callback
				// function with the search results after each search.
				service.textSearch(request, callback);
			});
		}

		// Sets the boundaries of the map based on pin locations
		window.mapBounds = new google.maps.LatLngBounds();

		// locations is an array of location strings returned from locationFinder()
		locations = locationFinder();

		// pinPoster(locations) creates pins on the map for each location in
		// the locations array
		pinPoster(locations);
	}

	/*
 Uncomment the code below when you're ready to implement a Google Map!
 */

	// Calls the initializeMap() function when the page loads
	window.addEventListener('load', initializeMap);

	// Vanilla JS way to listen for resizing of the window
	// and adjust map bounds
	window.addEventListener('resize', function (e) {
		//Make sure the map bounds get updated on page resize
		map.fitBounds(mapBounds);
	});
});
