#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    double r, pi = 3.14159;
    cin >> r;
    cout << fixed << setprecision(3);
    cout << "VOLUME = " << (4.0/3.0) * pi * r * r * r << endl;
    return 0;
}
