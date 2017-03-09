/*
This is empty on purpose! Your code to build the resume will go here.
model - bio, edu, work, project objects 
controller - will get the data from model and pass to the view 
view - the data from the controller put on to the screen

 */


$(function(){
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

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
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';




var model = { 
	
	bio: {
		name: "Christopher Capozzi",
		role: "Instructor",
		contacts: {mobile: "010-7299-0628",
				   email:"capozzic1@gmail.com",
				   github:"https://github.com/capozzic1",
				   location:"Daegu, South Korea"
					},
		welcomeMessage: "Welcome to my resume",
		skills:["HTML5","CSS","JavaScript","jQuery","ReactJS","git","Chrome Developer Tools","Fire bug","MVC","Sass"],
		biopic: "https://s21.postimg.org/am1rzzks7/biopic.jpg",
		
		display(){
			
		}
		
	},
	
	education: { 
		schools: [
			{
			name: "University of Nevada, Las Vegas",
			location: "Las Vegas, Nevada",
			degree: "Bachelor of Science in Business Administration",
			major:"Management Information Systems",
			dates:"06/2008-08/2013"
			}
			],
		onlineCourses: [
			{	
			title:"Javascript Design Patterns",
			school:"Udacity",
			dates:"03/2017-04/2017",
			url: "https://www.udacity.com/course/javascript-design-patterns--ud989",
			},
			{
			title:"Front end webdevelopment program",
			school:"Freecodecamp.com",
			dates:"08/2016-01/2017",
			url: "https://www.freecodecamp.com/capozzic1/front-end-certification",
			},
			{
			title:"Javascript",
			school:"Codeacademy",
			dates:"01/2016-12/2017",
			url: "https://www.codecademy.com/learn/javascript",
			},
			{
			title:"Learn ReactJS",
			school:"Codeacademy",
			dates:"2017",
			url: "https://www.codecademy.com/learn/react-101",	
			},
			{
			title:"jQuery",
			school:"Codeacademy",
			dates:"2016",
			url: "https://www.codecademy.com/learn/jquery",	
			},
			{
			title:"PHP",
			school:"Codeacademy",
			dates:"2016",
			url: "https://www.codecademy.com/learn/php",	
			}
			],
			
			display(){
				
			}
	
	},
	
	work: {
		jobs: [
		{
			employer: "Daegu Gyeongbuk English Village",
			title: "Instructor",
			dates: "03/2016-present",
			description:"At DGEV, my duty is to teach English to students of all age levels.",
			display(){
				
			}
		},
		{
			employer: "Cox Communications",
			title: "National Support Center Technical Specialist",
			dates: "03/2016-present",
			description:"During my time at Cox, I assisted Cox Business customers with troubleshooting internet, phone, and video related problems. I translated technical problems to nontechnical people.",
			display(){
				
			}
		}
		]
	},
	projects:[
		{
		title:"A responsive mock website",
		dates:"2017",
		description:"A partial theme made with HTML, CSS, Javascript, and Bootstrap",
		images:["https://image.ibb.co/ePPUrF/mock.png"]
		},
		{
		title:"A weather app",
		dates:"2016",
		description:"An app that uses AJAX and uses the open weather API to deliver weather information",
		images:["https://image.ibb.co/fBTYJv/weather.png"]
		},	
		{
		title:"A recipe box",
		dates:"2017",
		description:"An app where you can create, edit, and delete recipes",
		images:["https://image.ibb.co/iAi0yv/recipebox.png"]
		}		

	],
		display(){
			
		}
	


}

	var controller = {
	init(){
		this.formatBio();
		this.formatEdu();
		this.formatWork();
		this.formatProj();
		view.init();
		
	},
	formatBio(){

		var bioArr = [];
		var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
		var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

		var name = HTMLheaderName.replace('%data%', model.bio.name);
		var role = HTMLheaderRole.replace('%data%', model.bio.role);
		var email = HTMLemail.replace("%data%",model.bio.contacts.email);
		var mobile = HTMLmobile.replace("%data%", model.bio.contacts.mobile);
		var git = HTMLgithub.replace("%data%",model.bio.contacts.github);
		var blog = HTMLblog.replace("%data%","http://dreamcap.site88.net/blog/");
		var location = HTMLlocation.replace("%data%",model.bio.contacts.location);
		var pic = HTMLbioPic.replace("%data%",model.bio.biopic);
		var welcome = HTMLwelcomeMsg.replace('%data%',model.bio.welcomeMessage);
		
		var skills = "";
		$.each(model.bio.skills,(i,value) => {
			skills += HTMLskills.replace("%data%",value);
		});
		
		bioArr.push(name, role, email, mobile, git, blog, location, pic, welcome);
		
		return bioArr;
	
		

	},
	
	formatEdu(){

		var HTMLschoolStart = '<div class="education-entry"></div>';
		var HTMLonlineClasses = '<h3>Online Classes</h3>';
		var schoolArr = [];
		
		var schStart = HTMLschoolName.replace("%data%", model.education.schools[0].name);
		var degree = HTMLschoolDegree.replace("%data", model.education.schools[0].degree);
		var dates = HTMLschoolDates.replace("%data%", model.education.schools[0].dates);
		var location = HTMLschoolLocation.replace("%data%", model.education.schools[0].location);
		var major = HTMLschoolMajor.replace("%data%", model.education.schools[0].major);
		
		var onlineClasses = "";
		
		$.each(model.education.onlineCourses,(i,value) =>
		{
			onlineClasses += "<li>" + HTMLonlineTitle.replace("%data%",value.title) +
							  HTMLonlineSchool.replace("%data%",value.school) +
							  HTMLonlineDates.replace("%data%",value.dates) + 
							  HTMLonlineURL.replace("%data%",value.url) +
							  "</li>";
		});
		
		schoolArr.push([HTMLschoolStart,schStart,degree,dates,location,major]);
		
		return schoolArr;
		//console.log(onlineClasses);
		//$('body').append(onlineClasses);
	},
	
	formatWork(){
		//maybe pass workstart to the view , append ul to it, then add jobs
		var HTMLworkStart = '<div class="work-entry"></div>';
		var HTMLworkEmployer = '<a href="#">%data%';
		var HTMLworkTitle = ' - %data%</a>';
		var HTMLworkDates = '<div class="date-text">%data%</div>';
		var HTMLworkLocation = '<div class="location-text">%data%</div>';
		var HTMLworkDescription = '<p><br>%data%</p>';
		
		var jobs = "";
		
		$.each(model.work.jobs,(i,job) => { 
			
			jobs += "<li>" + HTMLworkEmployer.replace("%data%", job.employer) + 
					HTMLworkTitle.replace("%data%",job.title) + 
					HTMLworkDates.replace("%data%",job.dates) + 
					HTMLworkLocation.replace("%data%","Las Vegas, Nevada") + 
					HTMLworkDescription.replace("%data%",job.description) + 
					"</li>";
			
			
		});
		
		//$('body').append(jobs);
	},

	formatProj(){
		//give start to view and add ul, then add projs li 
		var HTMLprojectStart = '<div class="project-entry"></div>';
		var HTMLprojectTitle = '<a href="#">%data%</a>';
		var HTMLprojectDates = '<div class="date-text">%data%</div>';
		var HTMLprojectDescription = '<p><br>%data%</p>';
		var HTMLprojectImage = '<img src="%data%">';
		
		 projs = "";
		
		$.each(model.projects,(i, proj) => {
			projs += "<li>" + HTMLprojectTitle.replace("%data%", proj.title) + 
			HTMLprojectDates.replace("%data%", proj.dates) + 
			HTMLprojectDescription.replace("%data%", proj.description) + 
			HTMLprojectImage.replace("%data%", proj.images) + 
			"</li>";
		});
		
		//$('body').append(projs);
	},
	
}
	var view = { 
	
		init(){
		this.showBio();
		this.showEdu();
		},
		
		showBio(){
			var bioInfo = controller.formatBio();
			var lis = "";
			//console.log(bioInfo);
			$('#header').append(bioInfo[0],bioInfo[1], bioInfo[7],bioInfo[8]);
			
			for (let i = 2; i < 7; i++){
				$('#topContacts').append(bioInfo[i]);
			}
			
			//$('#topContacts').append();
		},
		showEdu(){
			var eduInfo = controller.formatEdu();
			console.log(eduInfo);
			$('#education').append(eduInfo[0][0]);
			for (let i = 1; i < eduInfo[0].length; i++){
				//$('.education-entry').append(eduInfo[0][i]);
			};
			
		}
		
		
	
		
	}

		controller.init();

	
});