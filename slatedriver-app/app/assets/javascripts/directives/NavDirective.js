<!-- <div class="col-lg-8 col-lg-offset-2">
<h1>{{hello}}</h1>
<h3 ng-if="user">Welcome, {{user.username}}</h3>
</div> -->


<div class="col-md-8 col-xs-offset-2">
<!-- <h3>{{hello}}</h3> -->
<h3 ng-if="user">Welcome, {{user.username}}</h3>

<ul ng-init="home.getSlates">
  <li>Here are your slates {{index + 1}}:{{slates}}</li>
</ul>
</div>
<div class="col-xs-8 col-xs-offset-2">



  <h3>These are {{user.username}}'s choices for Northern Nevada 2020'</h3>
  <h2>NATIONAL ELECTIONS</h2>
  <h3>US PRESIDENT: [ GARY JOHNSON ]</h3>
    <p>"I like him because he smokes pot and climbs mountains"</p>
    <h3>US SENATE: [ Edde "in liberty" Hamilton ]</h3>
    <p>"He is crazy, but he has a nice hat"</p>
    <h3>US CONGRESS: [ Mark Amedoei ]</h3>
    <p>"My daughter goes to school with his son, so he is cool"</p>
    <h3>STATE REPRESENTATIVES</h3>
    <h3>STATE SENATE: [ None of the above]</h3>
    <p>"I don't like anyone running they are all corrupt"</p>
    <h3>STATE ASSEMBLY: [ Lisa Krasner ]</h3>
    <p>"I am not super excited about her, but I'll give her a chance"</p>
    <h2>LOCAL RACES</h2>
    <h4>CITY COUNCIL</h4>
    <h3>Adam West</h3>
    <p>"He was a good Batman"</p>
    <h3>Adam Khan</h3>
    <p>"He is an honest man"</p>
    <h4>JUDGES</h4>
    <h3>Mike Curry</h3>
    <p>"He goes to church everyday, he will show no mercy"</p>
    <h3>Colin Hart</h3>
    <p>"He has committed all the same crimes I have"</p>
    <h3>Alejandra</h3>
    <p>"Ale, Ale, Jandra, Ale, Alejandra"</p>
    <h4>ISSUES</h4>
    <h3>LEGALIZE MARIJUANA</h3>
    <h4>Yes</h4>
    <p>"We waste too much money throwing harmless people in prison for this"</p>
    <h3>TAX INCREASE FOR SCHOOL</h3>
    <h4>No</h4>
    <p>"They are already wasting too much of my money"</p>
    <h3>CLOSE THE GUNSHOW LOOPEHOLE</h3>
    <h4>No</h4>
    <p>"It is pointless and stupid, and the person that wrote this law hates America"</p>
      <!-- </div> -->
</div>

<!--
<form ng-submit="home.getSlates" class="col-xs-8 col-xs-offset-2">

  <h4>NATIONAL ELECTIONS</h4>
  <h4>US PRESIDENT</h4>
    <input type="text" ng-model="editableSlateFields.president" placeholder="President"></input>
    <input type="text" ng-model="editableSlateFields.president" placeholder="REASONS"></input><br>
    <h4>US CONGRESS</h4>
    <input type="text" ng-model="editableSlateFields.usSenate" placeholder="US Senate"></input>
    <input type="text" ng-model="editableSlateFields.usSenate" placeholder="REASONS"></input><br>
    <input type="text" ng-model="editableSlateFields.usCongress" placeholder="US Congress"></input>
    <input type="text" ng-model="editableSlateFields.usCongress" placeholder="REASONS"></input><br>
    <h4>STATE REPRESENTATIVES</h4>
    <input type="text" ng-model="editableSlateFields.nvSenate" placeholder="NV Senate"></input>
    <input type="text" ng-model="editableSlateFields.nvSenate" placeholder="REASONS"></input><br>
    <input type="text" ng-model="editableSlateFields.assembly" placeholder="NV Assembly"></input>
    <input type="text" ng-model="editableSlateFields.assembly" placeholder="REASONS"></input><br>
    <h2>LOCAL RACES</h2>
    <h4>CITY COUNCIL</h4>
    <input type="text" ng-model="editableSlateFields.president" placeholder="City Council1"></input>
    <input type="text" ng-model="editableSlateFields.president" placeholder="REASONS"></input><br>
    <input type="text" ng-model="editableSlateFields.president" placeholder="City Council2"></input>
    <input type="text" ng-model="editableSlateFields.president" placeholder="REASONS"></input><br>
    <h4>Judges</h4>
    <input type="text" ng-model="editableSlateFields.judge1" placeholder="Judge1"></input>
    <input type="text" ng-model="editableSlateFields.judge1" placeholder="REASONS"></input><br>
    <input type="text" ng-model="editableSlateFields.judge2" placeholder="Judge2"></input>
    <input type="text" ng-model="editableSlateFields.judge2" placeholder="REASONS"></input><br>
    <input type="text" ng-model="editableSlateFields.president" placeholder="Judge3"></input>
    <input type="text" ng-model="editableSlateFields.judge" placeholder="REASONS"></input><br>
    <h2>ISSUES</h2>
    <input type="text" ng-model="editableSlateFields.Issue1" placeholder="Issue1"></input>
    <input type="text" ng-model="editableSlateFields.Issue1" placeholder="REASONS"></input><br>
    <input type="text" ng-model="editableSlateFields.issue2" placeholder="Issue2"></input>
    <input type="text" ng-model="editableSlateFields.issue2" placeholder="REASONS"></input><br>
    <input type="text" ng-model="editableSlateFields.issue" placeholder="Issue3"></input>
    <input type="text" ng-model="editableSlateFields.president" placeholder="REASONS"></input>


    <button type="submit">SAVE</button>

</form> -->
