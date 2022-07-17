from django.db import models

class Student(models.Model):
    regdNo=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=30)
    rollNo=models.IntegerField()
    branch=models.CharField(max_length=20)
    dept=models.CharField(max_length=20)
    dob=models.IntegerField()
    eMail=models.CharField(max_length=30)
    phone=models.IntegerField()
    pin=models.IntegerField()
    district=models.CharField(max_length=20)
    state=models.CharField(max_length=20)
    def __str__(self):
        return self.name+" "+str(self.regdNo)
class Smartapp_User(models.Model):
    name=models.CharField(max_length=30)
    regdNo=models.IntegerField(primary_key=True)
    phone=models.IntegerField()
    eMail=models.CharField(max_length=30)
    password=models.CharField(max_length=20) 
    def __str__(self):
        return self.name+" "+str(self.regdNo)       
