#include <iomanip>
#include <iostream>

using namespace std;
int main()
{
    int t, v;
    cin >> t >> v;
    cout << fixed << setprecision(3);
    cout << t * v / 12.0 << endl;
}