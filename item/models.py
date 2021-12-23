from django.db import models


class Item(models.Model):
    """Модель элемента таблицы."""

    date = models.DateField(verbose_name='Дата', auto_now_add=True)
    name = models.CharField(verbose_name='Название', max_length=100)
    amount = models.IntegerField(verbose_name='Количество')
    distance = models.FloatField(verbose_name='Расстояние')

    def __str__(self):
        return self.name
