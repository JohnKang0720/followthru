//
//  BrowseView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct BrowseView: View {
    var body: some View {
        ScrollView{
            VStack {
            ProjectCardView()
            ProjectCardView()
            }
        }
        .navigationTitle("Browse Projects")
    }
}

struct BrowseView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
        BrowseView()
        }
    }
}
