#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    float pi = 3.14159, r;
    cin >> r;
    cout << fixed << setprecision(4);
    cout << "A=" << pi * (r * r) << endl;
    return 0;
}
