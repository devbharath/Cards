profilecounter=0
var profiledata={}

function getusrname() {
    usrname=document.getElementById('uname').value
    localStorage.setItem('usrname',usrname)
    document.location.href='form.html'
}

function setuname() {
    var namespan=document.getElementById('uname')
    usrname=localStorage.getItem('usrname')
    namespan.innerHTML=usrname
}

function getbdata(){
    var spnname=document.getElementById('name').value

    var spncity=document.getElementById('city').value

    var spnph=document.getElementById('ph').value

    var spnage=document.getElementById('usrage').value

     profiledata.name=spnname
     profiledata.city=spncity
     profiledata.phone=spnph
     profiledata.age=spnage

if(localStorage.getItem('profile')!=undefined){
    var fetcheddata=localStorage.getItem('profile')
    var storedata=JSON.parse(fetcheddata)
    var profile=[]
    profile.push(storedata);
    profile.push(profiledata)
    var storeData = JSON.stringify(profile)
    localStorage.setItem('profile',storeData)

}
else{

    var profile = []
    profile.push(profiledata)
    var storeData = JSON.stringify(profile)
    localStorage.setItem('profile',storeData)
   
}
}