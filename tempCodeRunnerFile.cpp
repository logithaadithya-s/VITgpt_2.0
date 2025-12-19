#include<iostream>
using namespace std;

void mrg(int arr[],int l,int m,int h){
    int i=l,j=m+1,k=0;
    int brr[100];
    while(i<=m&&j<=h){
        if(arr[i]>arr[j]){
            brr[k++]=arr[j++];
        }else{
            brr[k++]=arr[i++];
        }
    }
    while(i<=m){
        brr[k++]=arr[i++];
    }
    while(j<=h){
        brr[k++]=arr[j++];
    }
    i=l;
    for(int p=0;p<k;p++){
        arr[i++]=brr[p];
    }
}
void mergesort(int arr[],int l,int h){
    if(l<h){
        int m=l+(h-l)/2;
        mergesort(arr,l,m);
        mergesort(arr,m+1,h);
        mrg(arr,l,m,h);
    }
}
int main(){
    int n;
    cout<<"Enter the number of input:";
    cin>>n;
    cout<<"Enter the inputs to be sorted:";
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    mergesort(arr,0,n-1);
    cout<<"The sorted array:";
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    return 0;
}