from django.urls import path

from .views import ItemAPIView, test


urlpatterns = [
    path('', ItemAPIView.as_view(), name='home'),
]