SELECT * FROM `jobbydb`.`category` as jadoreleski inner join jobbydb.question as jadorelesnow on jadoreleski.categoryId = jadorelesnow.question_categoryId;
SELECT * FROM `jobbydb`.`category` as jadoreleski left join jobbydb.question as jadorelesnow on jadoreleski.categoryId = jadorelesnow.question_categoryId where jadorelesnow.question_categoryId is NULL

SELECT * FROM `jobbydb`.`category` as jadoreleski right join jobbydb.question as jadorelesnow on jadoreleski.categoryId = jadorelesnow.question_categoryId

