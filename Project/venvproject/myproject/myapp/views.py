from pyexpat.errors import messages
from ssl import AlertDescription
from django.shortcuts import render, redirect
from .models import User
from django.http    import JsonResponse, HttpResponse
# Create your views here.

def index(request):
    return render(request, 'index.html')

def join(request):
    if request.method == 'GET':
        return render(request, 'join.html')
    
    elif request.method == 'POST':
        email = request.POST.get('email', ' ')
        loginPW = request.POST.get('loginPw', ' ')
        loginPW2 = request.POST.get('loginPwConfirm', ' ')
        name = request.POST.get('name', ' ')
        nickname = request.POST.get('nickname', ' ')
        gender = request.POST.get('gender', ' ')
        cellphoneNo = request.POST.get('cellphoneNo', ' ')

        if(email or loginPW or loginPW2 or name or nickname or gender or cellphoneNo) == ' ':
            return redirect('/join')
        if(loginPW != loginPW2):
            return redirect('/join')
        if User.objects.filter(email=email).exists():
            return redirect('/join')
        else:
            user = User(
                email=email,
                loginPW=loginPW,
                name=name,
                nickname=nickname,
                gender=gender,
                cellphoneNo=cellphoneNo
            )
            user.save()
            return redirect('/')

def login(request):
    
    if request.method == "GET":
        return render(request, 'login.html')




def header(request):
    return render(request, 'header.html')

