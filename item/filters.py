import django_filters


class ItemFilter(django_filters.FilterSet):
    """Фильтр по всем полям модели таблицы"""
    date_range = django_filters.DateRangeFilter(field_name='date')
    name_filter = django_filters.AllValuesFilter(field_name='name')
    amount_range = django_filters.RangeFilter(field_name='amount')
    distance_range = django_filters.RangeFilter(field_name='distance')
