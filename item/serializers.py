from rest_framework import serializers

from .models import Item


class ItemSerializer(serializers.ModelSerializer):
    """Сериалайзер для модели элемента таблицы"""

    class Meta:
        model = Item
        fields = ('__all__')
