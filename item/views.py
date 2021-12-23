from rest_framework import generics
from django.http import HttpResponse

from .filters import ItemFilter
from .models import Item
from .serializers import ItemSerializer


class ItemAPIView(generics.ListAPIView):
    """Вывод всех эелементов таблицы с возможностью фильтрации."""
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    filter_class = ItemFilter
    filterset_fields = ('date',)


def test(request):
    return HttpResponse('Hllo')
