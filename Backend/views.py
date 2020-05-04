from django.shortcuts import render

def HomeViews (request):
    return render(request,'welcome.html')