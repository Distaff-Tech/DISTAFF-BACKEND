# Generated by Django 3.0.2 on 2020-04-13 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0009_relpostclothstyle_relpostclothstylecolour_relpostpattern_relpostsew_relpostshape_relpostshapecolour'),
    ]

    operations = [
        migrations.AddField(
            model_name='fabric',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=9, null=True),
        ),
        migrations.AddField(
            model_name='pattern',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=9, null=True),
        ),
        migrations.AddField(
            model_name='shape',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=9, null=True),
        ),
    ]
