Feature: sample get

Background: 
* url 'https://reqres.in/'
* header Content-Type = 'application/json'

Scenario: test get
Given path '/api/users?page=2'
When method get
Then status 200
* print 'Done'