from django.urls import path
from smartapp.views import home,forgotpassword,verifycode,resetpassword,userLogin,userLogout,loginValidate,newUser,userRegistration,viewStudents,newStudent,saveStudent,updateStudent,updation,deleteStudent

urlpatterns=[
    path('logout/',userLogout),
    path('login/',userLogin),
    path('login-validate/',loginValidate),
    path('new-user/',newUser),
    path('signup/',userRegistration),
    path('delete-student/',deleteStudent),
    path('update-student/',updateStudent),
    path('updation/',updation),
    path('save-student/',saveStudent),
    path('new-student/',newStudent),
    path('view-students/',viewStudents),
    path('home/',home),
    path('forgotpassword/',forgotpassword),
    path('verifycode/',verifycode),
    path('resetpassword/',resetpassword),
]