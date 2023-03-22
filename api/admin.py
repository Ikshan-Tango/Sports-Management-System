from time import time
from django.contrib import admin

# Register your models here.

from .models import Equipment, Court, Timeslot, CustomUser


from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm



class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ("roll_no", "is_staff", "is_active",)
    list_filter = ("roll_no", "is_staff", "is_active",)
    fieldsets = (
        (None, {"fields": ("roll_no", "password")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "groups", "user_permissions")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "roll_no", "password1", "password2", "is_staff",
                "is_active", "groups", "user_permissions"
            )}
        ),
    )
    search_fields = ("roll_no",)
    ordering = ("roll_no",)


admin.site.register(CustomUser)

admin.site.register(Equipment)
admin.site.register(Court)
admin.site.register(Timeslot)

