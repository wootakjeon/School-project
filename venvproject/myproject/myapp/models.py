from django.db import models

# Create your models here.


class User(models.Model):
    email = models.EmailField(max_length = 200, unique=True, verbose_name='이메일')
    loginPW = models.CharField(max_length = 200, verbose_name='비밀번호')
    name = models.CharField(max_length = 200, verbose_name='이름')
    nickname = models.CharField(max_length = 200, verbose_name='닉네임')
    gender = models.CharField(max_length = 10, verbose_name='성별')
    cellphoneNo = models.CharField(max_length = 30, verbose_name='연락처')
    createDay = models.DateTimeField(auto_now_add=True, verbose_name='생성시간')

    def __str__(self):
        return self.nickname

    class Meta:
        db_table = 'user'
        verbose_name = '회원가입'
        verbose_name_plural = '회원가입'