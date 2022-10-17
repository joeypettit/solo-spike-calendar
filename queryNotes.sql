--How to truncate SQL Timestamps

spark-sql> select date_trunc('YYYY', timestamp'2022-06-15 23:07:49.178');
2022-01-01 00:00:00
spark-sql> select date_trunc('MM', timestamp'2022-06-15 23:07:49.178');
2022-06-01 00:00:00
spark-sql> select date_trunc('DAY', timestamp'2022-06-15 23:07:49.178');
2022-06-15 00:00:00
spark-sql> select date_trunc('WEEK', timestamp'2022-06-15 23:07:49.178');
2022-06-13 00:00:00
spark-sql> select date_trunc('hour', timestamp'2022-06-15 23:07:49.178');
2022-06-15 23:00:00
spark-sql> select date_trunc('minute', timestamp'2022-06-15 23:07:49.178');
2022-06-15 23:07:00
spark-sql> select date_trunc('quarter', timestamp'2022-06-15 23:07:49.178');
2022-04-01 00:00:00


--How to grab current Time in POSTGRES
NOW()

--Increment Time
SELECT (NOW() + interval '2 day') AS this_time_after_two_days;


--Default Now() to timezone UTC
create temporary table test(
    id int, 
    ts timestamp without time zone default (now() at time zone 'utc') --utc must be lowercase, single quotes
);

WTF: console.log((new Date(thisViewsEvents[i].starttime)).getDate());