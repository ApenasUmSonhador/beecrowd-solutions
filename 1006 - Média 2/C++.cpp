#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    float a, b, c;
    cin >> a >> b >> c;
    cout << fixed << setprecision(1);
    cout << "MEDIA = " << (0.2*a + 0.3*b + 0.5*c) << endl;
    return 0;
}