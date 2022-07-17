from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from smartapp import models

def deco_login(f1):
    def mod_f1(request):
        if 'regdNo' in request.session.keys():
           return f1(request)
        else:
           return HttpResponseRedirect("http://localhost:8000/smartapp/login/")
    return mod_f1   
def userLogin(request):
    res=render(request,'smartapp/user_login.html')
    return res 
def userLogout(request):
    del request.session['regdNo']
    return HttpResponseRedirect("http://localhost:8000/smartapp/login/")    
def loginValidate(request):
    regdNo=request.POST['regdNo']
    password=request.POST['password']
    try:
        user=models.Smartapp_User.objects.get(regdNo=regdNo,password=password)
        s="http://localhost:8000/smartapp/home/"
        request.session['regdNo']=regdNo
    except:
        s="http://localhost:8000/smartapp/login/"  
    return HttpResponseRedirect(s)             
def newUser(request):
    error_msg="Registration Number Is Already Taken"
    d={}
    try:
        if int(request.GET['err'])==1:
           d['error_msg']=error_msg
    except:
        pass       
    res=render(request,'smartapp/new_user.html',d)
    return res
def userRegistration(request):
    myuser=models.Smartapp_User()
    myuser.name=request.POST['name']
    myuser.regdNo=request.POST['regdNo']
    if myuser==models.Smartapp_User.objects.get(regdNo=myuser.regdNo):
       s="http://localhost:8000/smartapp/new-user/?err=1"
       return HttpResponseRedirect(s)     
    myuser.phone=request.POST['phone']
    myuser.eMail=request.POST['email']
    myuser.password=request.POST['password']
    myuser.save()
    return HttpResponseRedirect('http://localhost:8000/smartapp/login/')
def deleteStudent(request):
    std=models.Student.objects.get(regdNo=request.GET['regdNo'])
    std.delete()
    return HttpResponseRedirect('http://localhost:8000/smartapp/view-students/')
def updateStudent(request):
    std=models.Student.objects.get(regdNo=request.GET['regdNo'])
    res=render(request,'smartapp/update_student.html',{'std':std})
    return res
def updation(request):
    std=models.Student()
    std.regdNo = request.POST['regdNo']
    std.name = request.POST['name']
    std.rollNo=request.POST['rollNo']
    std.branch=request.POST['branch']
    std.dept = request.POST['dept']
    std.dob = request.POST['dob']
    std.eMail=request.POST['eMail']
    std.phone=request.POST['phone']
    std.pin=request.POST['pin']
    std.district=request.POST['district']
    std.state=request.POST['state']
    std.save()
    return HttpResponseRedirect('http://localhost:8000/smartapp/view-students/')      
def newStudent(request):
    res=render(request,'smartapp/new_student.html')
    return res
def saveStudent(request):
    std=models.Student()
    std.regdNo = request.POST['regdNo']
    std.name = request.POST['name']
    std.rollNo = request.POST['rollNo']
    std.branch = request.POST['branch']
    std.dept = request.POST['dept']
    std.dob = request.POST['dob']
    std.eMail = request.POST['eMail']
    std.phone = request.POST['phone']
    std.pin=request.POST['pin']
    std.district = request.POST['district']
    std.state = request.POST['state']
    std.save()  
    return HttpResponseRedirect('http://localhost:8000/smartapp/view-students/')
def viewStudents(request):
    students=models.Student.objects.all()
    res=render(request,'smartapp/view_students.html',{'students':students})
    return res
@deco_login
def home(request):
    response=render(request,'smartapp/home.html')
    return response
def forgotpassword(request):
    response=render(request,'smartapp/forgotpassword.html')
    return response
def verifycode(request):
    response=render(request,'smartapp/verifycode.html')
    return response
def resetpassword(request):
    response=render(request,'smartapp/Resetpassword.html')
    return response            