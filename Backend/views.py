from django.shortcuts import render

def HomeViews (request):
    return render(request,'welcome.html')

def RuleViews (request):
    return render(request,'rules.html')