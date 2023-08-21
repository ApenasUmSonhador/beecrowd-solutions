#include <iomanip>
#include <iostream>
#include <math.h>

using namespace std;
int main()
{
    float x1, x2, y1, y2;
    cin >> x1 >> y1;
    cin >> x2 >> y2;
    cout << fixed << setprecision(4);
    cout << pow(pow((x1 - x2), 2) + pow((y1 - y2), 2), 0.5) << endl;
    return 0;
}
