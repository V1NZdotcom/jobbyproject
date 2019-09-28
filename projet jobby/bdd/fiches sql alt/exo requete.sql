1 : 
select possibleResponseLabel from jobbydb.possibleResponse where possibleResponse_questionId in (select questionId from jobbydb.question where question_categoryId in (select categoryId from jobbydb.category where categoryId between 1 and 3))

2 : 
select * from jobbydb.user
insert into jobbydb.user ( userPseudo, userPassword, userMail, userFirstName, userLastName , userAge, userPhone, userCode)
values ('BIDON', 'BIDON' , 'BIDON@BIDON.BIDON', 'BIDON', 'BIDON', '100' , 'BIDONPHONE', concat('user_',uuid()))

3:
update jobbydb.user
set userPseudo = 'dfgsdfgdfggf' , 
userPassword = 'dfgsdfgdfggf',
userMail = 'dfgsdfgdfggf',
userFirstName = 'dfgsdfgdfggf',
userLastName = 'dfgsdfgdfggf',
userAge = 22,
userPhone = 'dfgsdfgdfggf',
userCode =  'dfgsdfgdfggf' 
where userId=3;

4:
select * from jobbydb.adress
 insert into jobbydb.adress (adressLabel, adressCountry, adressRegion, adressCity, adressZipCode, adressStreetNumber , adressStreetName, adress_userId)
values ('Perso', 'Kenya', 'Bouloulou' , 'Kalimbala', 11111, 49, 'rue du poulet', 3) 

5:
select adressId as result from jobbydb.adress where adressId = 5

6:
select * from jobbydb.adress
select * from jobbydb.user
update jobbydb.adress 
set adressLabel = 'adress-update',
adressCountry = 'adress-update',
adressRegion = 'adress-update',
adressCity = 'adress-update',
adressStreetName = 'adress-update'
 where adress_userId = 3;



