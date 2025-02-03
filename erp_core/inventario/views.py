from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-creation_date')
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]

    filterset_fields = ['category', 'stock'] # Exact filter
    search_fields = ['name', 'description'] # Search by text
    ordering_fields = ['price','stock'] # Ordering

    # Custom filter for minimum stock
    def get_queryset(self):
        queryset = super().get_queryset()
        stock_min = self.request.query_params.get('stock_min')
        if stock_min:
            queryset = queryset.filter(stock__gte=stock_min)
        return queryset


