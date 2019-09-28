select * from jobbydb.question;

select * from jobbydb.user;

select * from jobbydb.pro;

select * from jobbydb.clientAnswer;

select * from jobbydb.demand;

select * from jobbydb.adress;

select * from jobbydb.possibleResponse;

INSERT INTO jobbydb.question (questionCode, questionOrder, questionLabel, question_questionTypeId)  
values (concat('question_',uuid()),1000,"bois tu du coca", 1);
  question_categoryId
INSERT INTO jobbydb.possibleResponse (possibleResponseOrder, possibleResponseLabel, possibleResponseCode, possibleResponse_questionId) 
values (3000, 'Autre', (concat('possibleResponse_',uuid())),18)

INSERT INTO jobbydb.user (userPseudo, userPassword, userMail, userFirstName , userLastName, userAge, userPhone, userCode) 
values ('Cristaline', 'keepapi', 'cricri@gmail.com', 'Cristal', 'Ine', 50, '0687485158',(concat('user_',uuid())));

INSERT INTO jobbydb.pro (proName, proMail, proPhone, proCode) 
values ('Coworking', 'coworking@gmail.com','0658495237',(concat('pro_',uuid())));


INSERT INTO jobbydb.adress (adressLabel, adressCountry, adressRegion, adressCity, adressZipCode, adressStreetNumber, adressStreetName, adress_userId) 
values ("Perso", "France", "Vosges","Cristaline",24888,78,"rue de l'eau de source",2);

INSERT INTO jobbydb.demandQuestion (demandQuestion_demandId, demandQuestion_questionId) 
values (1,6);

INSERT INTO jobbydb.demand (demandCode, demand_userId) 
values (concat('demand_',uuid()),2);


INSERT INTO jobbydb.clientAnswer (clientAnswerLabel, clientAnswer_possibleResponseId, clientAnswer_demandQuestionId) 
values ('Une perceuse',11,1);



