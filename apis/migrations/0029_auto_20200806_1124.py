# Generated by Django 3.0.2 on 2020-08-06 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0028_favourite_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='login_type',
            field=models.CharField(choices=[('i', 'i'), ('f', 'f'), ('g', 'g'), ('e', 'e'), ('ap', 'ap')], max_length=50),
        ),
    ]