from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import auth

# Create your views here.
def SignupViews (request):
    if request.method=='POST':
        if request.POST['matric'][3:6]=='708':
            if request.POST['pass1']==request.POST['pass2']:
                try:
                    user=User.objects.get(username=request.POST['matric'])
                    return render(request,'signUp.html',{'error':'Imposter!! Matric Already Taken'})
                except User.DoesNotExist:
                    user=User.objects.create_user(request.POST['matric'],password=request.POST['pass1'])
                    auth.login(request,user)
                    return redirect('login')
            else:
                return render(request,'signUp.html',{"error":"Yo!! ensure that password match"})
        else:
            return render(request,'signUp.html',{"error":"Hey!! Only MEDLAB students allowed"})
    else:
        return render(request,'signUp.html')

def LoginViews (request):
    if request.method=='POST':
        user=auth.authenticate(username=request.POST['matric'],password=request.POST['pass'])
        if user is not None:
            auth.login(request,user)
            return redirect('rules')
        else:
            return render (request,'signIn.html',{'error':'Incorrect Password or Matric'})
    else:
        return render (request,'signIn.html')


def LogoutViews (request):
    if request.method=='POST':
        auth.logout(request)
        return redirect('home')

