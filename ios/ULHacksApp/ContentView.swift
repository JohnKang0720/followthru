//
//  ContentView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-13.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            NavigationView {
                BrowseView()
            }
                .tabItem {
                    Image(systemName: "book.fill")
                    Text("Feed")
                }
            NavigationView {
                Text("Hello 2")
            }
                .tabItem {
                    Image(systemName: "magnifyingglass")
                    Text("Browse")
                }
            Text("Screen 3")
                .tabItem {
                    Image(systemName: "square.and.arrow.up.fill")
                    Text("Upload")
                }
            Text("Screen 4")
                .tabItem {
                    Image(systemName: "person.fill")
                    Text("BProfile")
                }

        }
        .accentColor(.blue)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
