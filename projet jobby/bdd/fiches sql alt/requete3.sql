select possibleResponseLabel from jobbydb.possibleResponse where possibleResponse_questionId in (select questionId from jobbydb.question where question_categoryId in (select categoryId from jobbydb.category where categoryId between 1 and 3))


select * from jobbydb.category
3 2 3 4 2 1
select * from jobbydb.question

select * from jobbydb.demand

select * from jobbydb.demandQuestion

select * from jobbydb.possibleResponse

select * from jobbydb.questionType

insert into jobbydb.category (categoryLabel, categoryCode)
values ('Transport',concat('category_',uuid()))

insert into jobbydb.question (questionCode, questionOrder, questionLabel, question_categoryId, question_questionTypeId)
values (concat('question_',uuid()), 6000, "Avez vous une ou des préférences pour le véhicule transporteur ?", 8, 1)

insert into jobbydb.possibleResponse (possibleResponseCode, possibleResponseOrder, possibleResponseLabel, possibleResponse_questionId)
values (concat('possibleResponse_',uuid()), 4000, "Fourgon blindé",53)

