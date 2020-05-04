from django.urls import path,include
from .views import *

urlpatterns= [
    path('login/',LoginViews,name='login'),
    # path('logout/',LogoutViews,name='logout'),
    path('signup/',SignupViews,name='signup'),
]