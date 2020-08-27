# DISTAFF-BACKEND
Distaff App's backend

project setup
step1: Install python3 
step2: Install all the requirents that mention in requirement.txt file 
step3: At project level, run command "python manage.py makemigrations" 
Step4: run command "python manage.py migrate" 
step5: run command "python manage.py runserver

Db setup
step1: Install mysql 
step2: In mysql create database distaff "create database distaff" 
step3: import distaff.sql file to the databse "mysql -uroot -p distaff < distaff.sql

Note

In settings.py file add your email in EMAIL_HOST_USER and DEFAULT_FROM_EMAIL In settings.py file add password in EMAIL_HOST_PASSWORD