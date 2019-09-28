select possibleResponseLabel from jobbydb.possibleResponse where possibleResponse_questionId in (select possibleResponse_questionId from jobbydb.possibleResponse where possibleResponse_questionId  = 2)

select categoryLabel from jobbydb.category where categoryId in (select possibleResponseId from jobbydb.possibleResponse where possibleResponse_questionId  = 2)

select categoryLabel from jobbydb.category where categoryId in (select question_categoryId from jobbydb.question where questionId in (select  possibleResponse_questionId from jobbydb.possibleResponse where possibleResponseId = 2))

select categoryLabel from jobbydb.category where categoryId in (select question_categoryId from jobbydb.question where questionId in (select demandQuestion_questionId from jobbydb.demandQuestion where demandQuestion_demandId in
(select demandId from jobbydb.demand where demand_userId = 2 )))


select categoryLabel as evian from jobbydb.category  where categoryId = 1
categoryId

select * from jobbydb.possibleResponse

select * from jobbydb.category

select * from jobbydb.demand

select * from jobbydb.questionType

INSERT INTO jobbydb.category (categoryLabel , categoryCode) 
values ('bidon',concat('category_',uuid()) )

INSERT INTO jobbydb.possibleResponse (possibleResponseOrder, possibleResponseLabel, possibleResponseCode , possibleResponse_questionId) 
values (6000, 'Une pince coupante', concat('possibleResponse_',uuid()) , 6)

