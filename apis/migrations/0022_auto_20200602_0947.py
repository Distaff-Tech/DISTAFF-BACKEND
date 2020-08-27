# Generated by Django 3.0.2 on 2020-06-02 09:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0021_post_post_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='has_bank_account',
            field=models.IntegerField(default=0),
        ),
        migrations.CreateModel(
            name='BankDetail',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('Account_name', models.CharField(default='', max_length=255)),
                ('Type', models.CharField(default='', max_length=255)),
                ('routing_number', models.CharField(default='', max_length=255)),
                ('acc_number', models.CharField(default='', max_length=255)),
                ('user', models.ForeignKey(null='True', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'bankdetail',
                'verbose_name_plural': 'bankdetails',
                'db_table': 'bankdetail',
            },
        ),
    ]