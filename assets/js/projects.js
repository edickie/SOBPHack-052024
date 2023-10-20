$(function() {
    //get JSON file
    $.getJSON("assets/data/submissions.json", function(data){
        let submissions = [];
        //render each submission as following template
        $.each(data, function(i,val){
            submissions.push("<h3><b>" + val.project_title + "</b></h3>" +
		    "<p><b>Name: </b>" + val.user_name + "</p>" +
		    "<p><b>Contact: </b>" + val.contact_address + "</p>" + 
		    "<p><b>Institution/Company: </b>" + val.affiliation + "</p>" + 
		    "<p><b>Project Description: </b>" + val.project_pitch + "</p>" + 
		    "<p><b>Goals: </b>" + val.goals + "</p>" + 
		    "<p><b>Tools Used: </b>" + val.desired_skills + "</p>" + 
		    "<p><b>Areas of Interest: </b>" + val.area_of_interest + "</p>" + 
		    "<p><b>GitHub Link: </b>" + val.github_link + "</p><br><hr>" ); 
	});
        //add to projects div
        $("<div/>", {
            "class": "prj",
            html: submissions.join("")
        }).appendTo("#projects");
    });
})
