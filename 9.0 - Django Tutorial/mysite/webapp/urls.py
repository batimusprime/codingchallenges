from django.conf.urls import url
#period is a local reference
from . import views


urlpatterns = [

    url(r'^$', views.index, name='index')

]
