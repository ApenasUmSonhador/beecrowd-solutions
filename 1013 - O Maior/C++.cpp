#include <iostream>
#include <stdlib.h> 
using namespace std;

int main()
{
    int a, b, c;
    cin >> a >> b >> c;
    cout << (((a+b+abs(a-b))/2) + c + abs(((a+b+abs(a-b))/2)-c))/2 << " eh o maior" << endl;
    return 0;
}