"""
Django settings for DiStaff project.

Generated by 'django-admin startproject' using Django 2.2.7.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '7*f(hih7eeb04uira9_p(%vx9ig8fitx+n_3frsr9s6vs(#fj!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'apis',
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'apis.middleware.SimpleMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]
CORS_ORIGIN_WHITELIST = (
    'http://3.21.18.92:8000','http://localhost:4200'
)

ROOT_URLCONF = 'DiStaff.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'apis/templates')],        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            'libraries': { # Adding this section should work around the issue.
                'staticfiles' : 'django.templatetags.static',
        },
        },
    },
]

WSGI_APPLICATION = 'DiStaff.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'distaff',
        'USER': 'root',
        'PASSWORD': 'Elizabethan@1550',
        #'PASSWORD': 'Netset@123',
        'HOST': 'localhost',  # OD113610194880343000
        'PORT': '3306',
        'OPTIONS': {
            'sql_mode': 'traditional',
        }
    }
}
AUTH_USER_MODEL = 'apis.User'


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

CSRF_COOKIE_SECURE = False

CORS_ALLOW_METHODS = (
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
)

CORS_ALLOW_HEADERS = (
    'accept',
    #'accept-encoding',
    'authorization',
    'content-type',
    #'dnt',
    'origin',
    'access-control-allow-origin',
    #'user-agent',
    #'x-csrftoken',
    #'x-requested-with',
    #'timeZone'
)
CORS_ORIGIN_ALLOW_ALL = True


# CSRF_COOKIE_HTTPONLY = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = "/media/"
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
    # os.path.join(BASE_DIR, 'media'),
]



EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = '' #enter email
EMAIL_HOST_PASSWORD = ''# enter password
# EMAIL_PORT = 587
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = ''#enter ypur default email id

STRIPE_SECRET_KEY = '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'
STRIPE_PUBLISHABLE_KEY = 'pk_live_51H9z0nE4Z5DuHAZeRAjGN1rbql1HJBz7XefB7K2Txg2ONhl3aQlNSvycxI9gdfukN3CwviHq1Y04VhSXbA9uy9rM00Y7TGHxp5'
