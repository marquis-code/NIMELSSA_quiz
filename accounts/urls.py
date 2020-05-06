from django.urls import path,include
from .views import *

urlpatterns= [
    path('login/',LoginViews,name='login'),
    path('signup/',SignupViews,name='signup'),
    path('logout/',LogoutViews,name='logout'),
]