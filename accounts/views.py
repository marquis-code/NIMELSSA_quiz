from django.shortcuts import render

# Create your views here.
def SignupViews (request):
    return render(request,'signUp.html')

def LoginViews (request):
    return render (request,'signIn.html')

