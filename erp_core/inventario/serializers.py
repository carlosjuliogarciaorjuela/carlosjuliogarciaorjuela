from rest_framework import serializers
from inventario.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ('created', 'update_date') # Non-editable fields

    # Custom validation for price
    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError('Price must be greater than 0')
        return value

    # Custom validation for stock
    def validate_stock(self, value):
        if value <= 0:
            raise serializers.ValidationError('Stock cannot be negative')
        return value

