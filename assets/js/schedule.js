// get modal
var modal = document.getElementById('infoModal');
let eventsModel = [];


$(function(){
    eventsModel = scheduleData;

    function showGenericModal(title, message) {
        // set content to passed parameters
        $(".modal-title").empty();
        $(".modal-body").empty();
        $(".modal-title").html(title);
        $(".modal-body").html(message);

        // $('#infoModal').modal('show');
       $("#infoModal").modal({
            //disable clicking on backdrop to close
            backdrop: 'static',
            //disable using the keyboard to close
            keyboard: false
        });

    }

    function getEventById(id) {
        let eventIdx = _.findIndex(eventsModel, function(events) {
            return events.id === id;
        });

        if (eventIdx != -1) return _.cloneDeep(eventsModel[eventIdx]);
        else null;
    }
    
    // show event details
    $(".table-responsive").on("click", ".sEvent", function(e) {
        e.stopPropagation();
        
        let clickedEvent = getEventById($(this).attr('data-id'));
        
        let modalTemplate = _.template(
            '<h3 class="time">Time: </h3> <%- scheduleData.time %><br>' +
            '<h3 class="details">Details: </h3> <%- scheduleData.details %>');
        
        // show event detail 
        showGenericModal(
            clickedEvent.event,
            modalTemplate({ 'scheduleData':clickedEvent })
        )});  
  });





// Data
  let scheduleData = [
    {
        id: "breakfast1",
        event: "Breakfast",
        time: "09:00 - 9:30",
        details: "Some breakfast fuel before hacking"
    }, {
        id: "welcome",
        event: "Opening and Welcome - Mingling",
        time: "09:30 - 09:45",
        details: "A chance to meet like-minded neurosciencers, learn about each others interests, form teams, and plan projects! "
    }, {
        id: "ignite2",
        event: "Ignite Talk: Aman Badhwar",
        time: "09:45 - 10:15",
        details: "Aman Badhwar from CRIUGM at University of Montreal will give an ignite talk on multi-scale perspectives in dementia research"
    }, {
        id: "coffee1",
        event: "Coffee Break",
        time: "10:15 - 10:30",
        details: "Coffee break with time to socialize"
    }, {
        id: "pitch",
        event: "Project Pitches",
        time: "10:30 - 11:00",
        details: "Pitch your project to some starry-eyed folks and attract collaborators both in hacking and in science!"
    }, {
        id: "teaming",
        event: "Teaming and Hacking",
        time: "11:00 - 12:30",
        details: "This is your chance to jump on exciting projects presented during the pitches and from website submissions"
    }, {
        id: "lunch1",
        event: "Lunch",
        time: "12:30 - 13:30",
        details: "Lunch break including various vegetarian, vegan, gluten-free and meat options"
    }, {
        id: "hack1T",
        event: "Open Hacking",
        time: "13:30 - 16:00",
        details:"Open Hacking session"
    }, {
        id: "coffee2",
        event: "Coffee Break",
        time: "16:00 - 16:30",
        details: "Short coffee break to get your eyes off hacking and to mingle with other teams"
    }, {
        id: "hack2T",
        event: "Open Hacking",
        time: "16:30 - 19:00",
        details: "Open hacking session"
    }, {
        id: "can-lect",
        event: "Canadian Association for Neuroscience 2019 Public Lectures",
        time: "18:30 - 20:00",
        details: "Talk at SickKids presented by Geoffrey Hinton, a key researcher in the field of machine learning."
    }, {
        id: "osbee",
        event: "OSBee (3 Brewers)",
        time: "20:00 - 23:00",
        details: "Informal social at 3 Brewers"
    }, {
        id: "breakfast2",
        event: "Breakfast",
        time: "09:00 - 09:30",
        details: "Day 2 Fuel"
    }, {
        id: "ignite1",
        event: "Ignite: Paul Pavlidis",
        time: "09:30 - 10:00",
        details: "Dr. Paul Pavlidis is Professor of Psychiatry and in the Michael Smith Laboratories at the University of British Columbia. He obtained his BA from Cornell University and his PhD in Molecular and Cell Biology (Neuroscience) at the University of California, Berkeley. He did postdoctoral work on the molecular basis of synaptic plasticity at Stanford and Columbia Universities before changing his focus to computational biology and genomics. He was on the faculty of Columbia’s department of Biomedical Informatics until moving to UBC in 2006. Dr. Pavlidis is in expert in bioinformatics, with a long track record of computational method and tool development in functional genomics. His lab's primary research focus is understanding the molecular basis of neurodevelopmental and psychiatric disorders. "
    }, {
        id: "hack1W",
        event: "Open Hacking",
        time: "10:00 - 12:30",
        details: "Open Hacking Session"
    }, {
        id: "unconf-talks",
        event: "Unconference Talks",
        time: "11:30 - 12:30",
        details: "An integral part of BrainHack where you get to run up and talk about what you're up to in research - great for putting yourself out there for collaborators and future mentors"
    }, {
        id: "lunch2",
        event: "Lunch",
        time: "12:30 - 13:30",
        details: "Pizza Lunch with meat, vegetarian, vegan and gluten-free options"
    }, {
        id: "hack2W",
        event: "Open Hacking",
        time: "13:30 - 15:45",
        details: "Final round of hacking"
    }, {
        id: "coffee3",
        event: "Coffee Break",
        time: "15:45 - 16:15",
        details: ""
    }, {
        id: "wrap-up",
        event: "Wrap-up",
        time: "16:15 - 16:45",
        details: "Chance to give updates on project progress and future plans - as well as prizes!"
    }, {
        id: "can-acn",
        event: "CAN-ACN Starts at the Sheraton",
        time: "17:00",
        details: "Official start of CAN-ACN Conference at Sheraton Hotel"
    }, {
        id: "can-keynote",
        event: "CAN Keynote Lecture",
        time: "17:15 - 18:15",
        details: "CAN-ACN Keynote Lecture by Michelle Monje"
    }, {
        id: "can-open",
        event: "CAN Opening Reception",
        time: "18:30 - 20:00",
        details: "Official CAN-ACN opening reception"
    }
];
  
